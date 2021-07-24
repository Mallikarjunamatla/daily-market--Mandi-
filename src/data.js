class Data{
    constructor(){

        this.apiKey = '579b464db66ec23bdd000001a91006a69a344a2f5750f6bda75532d8';
        this.pageNumber = 1;
        this.offSet = 0;
        this.limit = 10;


    }

    async getMarket(statename){
        const marketData = await fetch(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${this.apiKey}&format=json&offset=0&limit=10&filters[state]=${statename}`);
        const marketProfile = await marketData.json();

        return{
            marketProfile 
        }
    }
    firstPage(){
          this.pageNumber = 1;
          return this.pageNumber;
    }
    nextPage(){
        if(this.pageNumber >=1 && this.pageNumber <200 ){
            this.pageNumber=this.pageNumber+1;

        }
        
       return this.pageNumber;
        
    }
    previousPage(){
        if(this.pageNumber >1 && this.pageNumber <=200 )
        {
            this.pageNumber-=1;
        }
     return this.pageNumber;
        
    }
    lastPage(totalPages){
        if(totalPages > 200){
            this.pageNumber = 200;
        }
        else{
            this.pageNumber = totalPages;
        }
       return this.pageNumber;
        
    }


    
}