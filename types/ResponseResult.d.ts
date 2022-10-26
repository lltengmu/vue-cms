interface ResponseResolut <T>{
    code:number
    message:string
    type:"success"|"error"
    resoult: T
}