import { Children } from "react";
import NewsListItem from "./news_list_item";


// we can use {propertyName} to get the data directly otherwise
// to get all data w euse (props)

const NewsList = (props) =>{

    const displayNews = props.news.map((item)=>(
        <NewsListItem key = {item.id} item={item}/>
    ))
 
    
    return(
        <>
        {props.children}
        {displayNews}
        </>
    )
}

export default NewsList