import './card.css'

const Card =({title ,description,icon})=>{
    const element = () =>

        
        `
            <div class="card">
                <p class="card-title">${title} </p>
                <p class="card-description">${description}</p>
                <div>
                    <img src="${icon}" alt="" />
                </div>
            </div>
        `
    ;
    return {
        element
    }
}
export default Card