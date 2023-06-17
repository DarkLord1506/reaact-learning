import NewsListItem from "./news_list_item";


// we can use {propertyName} to get the data directly otherwise
// to get all data w euse (props)

const NewsList = ({news}) =>{

    const displayNews = news.map((item)=>(
        <NewsListItem key = {item.id} item={item}/>
    ))
 
    
    return(
        <>
        {displayNews}
        </>
    )
}

export default NewsList