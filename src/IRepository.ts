
export interface IRepository {
    id: number;
    name: string;
    full_name: string;
    created_at: string;
    updated_at: string; 
    startgazers_count: number;
}


export function repositoryFixture(partialRepo: any): IRepository {
    const date =  new Date()
    
    const defaults: IRepository = {
        id: 0,
        name: "repo",
        full_name: "name",
        created_at:date.toISOString() ,
        updated_at: date.toISOString(), 
        startgazers_count: 3,


    } 

    return {...defaults, ...partialRepo}
}