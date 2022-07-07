import { IRepository } from "./IRepository"

export type RepoProps  = {
    repos: IRepository[],
    title: string
}

export type BadgeProps = {
         value: number;
}