import ITvShow from "../Models/ITvShow";

// export default class ApiService {
//     constructor(){

//     }
//     function GetTvShows(page : number = 1): Promise<ITvShow[] | undefined>{
//             let data; 
//             await fetch(`https://www.episodate.com/api/most-popular?page=${page}`).then(async (response) => {
//                 const body = await response.json();
                
//                 data = body.tv_shows as ITvShow[];
//             });    
//             return data;
//     }
            
// }

export async function GetTvShows(page : number = 1): Promise<ITvShow[] | undefined>{
    let data; 
    await fetch(`https://www.episodate.com/api/most-popular?page=${page}`).then(async (response) => {
        const body = await response.json();
        
        data = body.tv_shows as ITvShow[];
    });    
    return data;
}