const Card = () => {
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
  )
}
export default Card