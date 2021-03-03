import datajson from "./data";
import React from "react"



export default  class SearchBox extends  React.Component{

    constructor(props) {
        super(props);
        this.state={
            search:null
        };
        this.handleSearchTerm= this.handleSearchTerm.bind(this)
    }

    handleSearchTerm(event){
        let keyword = event.target.value;
        this.setState({search:keyword})
    }


    render(){

        const items = datajson.filter((data)=>{
            if(this.state.search == null)
                return data
            else if( data.primary_city.toLowerCase().includes(this.state.search.toLowerCase())|| data.longitude.toLowerCase().includes(this.state.search.toLowerCase()) || data.county.toLowerCase().includes(this.state.search.toLowerCase()) || data.zip.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
        }).map(data=>{
            return(
                <div>
                    <ul>
                        <li><span >{data.zip}</span></li>
                        <li> <span>{data.type}</span></li>
                        <li> <span>{data.primary_city}</span></li>
                        <li> <span>{data.acceptable_cities}</span></li>
                        <li> <span>{data.unacceptable_cities}</span></li>
                        <li> <span>{data.county}</span></li>
                        <li> <span>{data.timezone}</span></li>
                        <li> <span>{data.area_codes}</span></li>
                        <li> <span>{data.latitude}</span></li>
                        <li> <span>{data.longitude}</span></li>
                        <li> <span>{data.country}</span></li>
                        <li> <span>{data.estimated_population}</span></li>
                    </ul>
                </div>
            )
        })
        return(
            <>
                <div>
                    <input type="search" id={"search"}  onChange={this.handleSearchTerm} />
                </div>
                <div>
                    {items}
                </div>

            </>
        )
    }
}
