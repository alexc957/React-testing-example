import { IRepository } from "../IRepository";


export const generateFakeData= () => {
    return Array.from({length: 9}, (_, i) => i + 1).map((id)=> {
    // console.log(id)
        const created_at = new Date()
        created_at.setDate(id);
        created_at.setMonth(id);
        const updated_at = new Date(created_at.getTime());
        updated_at.setDate(id=10-id)
        const repo: IRepository = {
            id,
            name: "repo "+id,
            full_name: "repository "+id,
            created_at: created_at.toISOString(),
            stargazers_count: id  + 1,
            updated_at: updated_at.toISOString(),
        
        } 

        return repo;
    })
}

