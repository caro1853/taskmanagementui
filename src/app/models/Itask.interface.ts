import { ICagegory } from "./category.interface";

export interface ITask {
    id?: number;
    name?: string;
    deadline?: Date;
    deadlineview?: string;
    iscompleted?: boolean;
    userid?: number;
    username?: string;
    category?:ICagegory
    categoryid?:number;
}