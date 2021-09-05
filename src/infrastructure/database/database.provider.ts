import { Sequelize } from "sequelize-typescript";
import { UserModel } from "src/model/user.model";
import { databaseConfig } from "./database.config";

class DatabaseProvider {
    
    private _databaseProviders = [
        {
            provide: "database",
            useFactory: async () => {
                const config = {
                    ...databaseConfig,
                    ...{ logging: false}
                };
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const sequelize = new Sequelize(config);

                // init model to sequelize
                sequelize.addModels([
                    UserModel
                ]);

                await sequelize.sync();
                return sequelize;
            },
        },
    ];

    getDatabaseProviders() {
        return this._databaseProviders;
    }
}

export const databaseProviders = new DatabaseProvider().getDatabaseProviders();
