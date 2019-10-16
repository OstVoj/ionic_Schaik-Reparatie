module Core {
    export class DatabaseFactory {
        public static get(successCallback: (tx: SqlTransaction) => any, errorCallback: () => any): void {
            var self = this;
            var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
            var db: Database
            // Open database and ensure table exists. Does not need closing, connections are cleaned automatically by system.
            if (isCordovaApp) {
                db = <Database> window.sqlitePlugin.openDatabase({ name: 'vanschaik.db', location: 'default', androidDatabaseImplementation: 2 });
            } else {
                db = window.openDatabase('vanschaik', '1.0', 'Van Schaik App database', 2 * 1024 * 1024);
            }
            db.transaction(function (tx: SqlTransaction): void {
                self.prepare(tx, successCallback, errorCallback);
            });
        }

        private static prepare(tx: SqlTransaction, successCallback: (tx: SqlTransaction) => any, errorCallback: () => any): void {
            var self = this;
            // Ensure migrations table exists and retrieve current version.
            tx.executeSql('CREATE TABLE IF NOT EXISTS migrations (version integer primary key asc, sql text)', [], function (tx: SqlTransaction): void {
                tx.executeSql('SELECT version FROM migrations', [], function (tx: SqlTransaction, results: SqlResultSet): void {
                    var current_version = results.rows.length > 0 ? results.rows.item(results.rows.length - 1)['version'] : -1;
                    self.migrate(tx, current_version, successCallback, errorCallback);
                }, errorCallback);
            }, errorCallback);
        }

        private static migrate(tx: SqlTransaction, current_version: number, successCallback: (tx: SqlTransaction) => any, errorCallback: () => any): void {
            var self = this;
            // Possibly deal with situations where version > migrations.length by dumping to JSON, rebuilding database and inserting JSON in future.
            if (current_version >= Constants.Migrations.length - 1) {
                successCallback(tx);
            } else {
                // Run the migration
                var new_version = current_version + 1
                tx.executeSql(Constants.Migrations[new_version], [], function (tx: SqlTransaction): void {
                    // Record the migration
                    tx.executeSql('INSERT INTO migrations (version, sql) VALUES (?, ?)', [new_version, Constants.Migrations[new_version]], function (tx: SqlTransaction): void {
                        // Check for next migration
                        self.migrate(tx, new_version, successCallback, errorCallback);
                    }, errorCallback);
                }, errorCallback);
            }
        }
    }
}