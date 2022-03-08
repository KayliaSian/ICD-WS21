export interface Character{

name:string;
id:string;
nickname:string;
age:string;
birthdate:string;
birthplace:string;

mother:string;
father:string;
siblings:{name:string}[];

haircolour:string;
eyecolour:string;
height:string;
weight:string;
bodytype:string;

traits:{trait:string}[];

likes:{like:string}[];
dislikes:{dislike:string}[];

backstory:string;

}
