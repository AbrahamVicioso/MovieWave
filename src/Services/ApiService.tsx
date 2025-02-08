import ITvShow from "../Models/ITvShow";

// export default class ApiService {
//     constructor(){

//     }
//     public async GetTvShows(page : number = 1): Promise<ITvShow[] | undefined>{
//             let data; 
//             await fetch(`https://www.episodate.com/api/most-popular?page=${page}`).then(async (response) => {
//                 const body = await response.json();
                
//                 data = body.tv_shows as ITvShow[];
//             });    
//             return data;
//     }
            
// }

export async function GetTvShows(page : number = 1){
    let data; 
    let pages;
    await fetch(`https://www.episodate.com/api/most-popular?page=${page}`).then(async (response) => {
        const body = await response.json();
        data = body.tv_shows as ITvShow[];
        pages = body.pages;
    });    
    return [data,pages];
}

export async function SearchTvShow(query : string, page:number = 1): Promise<ITvShow[] | undefined>{
    let data; 
    await fetch(`https://www.episodate.com/api/search?q=${query}&page=${page}`).then(async (response) => {
        const body = await response.json();
        data = body.tv_shows as ITvShow[];
    });    
    return data;
}

export async function GetTvShow(id : number): Promise<ITvShow | undefined>{
    let data; 
    await fetch(`https://www.episodate.com/api/show-details?q=${id}`).then(async (response) => {
        const body = await response.json();
        data = body.tvShow as ITvShow;
    });    
    return data;
}