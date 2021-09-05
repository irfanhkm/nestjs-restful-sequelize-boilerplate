import { DataType, Model, Table } from "sequelize-typescript";
import { Column } from "sequelize-typescript";

interface IUserModel {
    id?: number;
    name: string;
    phone: string;
}

@Table({ tableName: 'users'})
export class UserModel extends Model<IUserModel, IUserModel> implements IUserModel
{
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id?: number;

    @Column({ type: DataType.TEXT })
    name: string;

    @Column({ type: DataType.TEXT })
    phone: string;
}
