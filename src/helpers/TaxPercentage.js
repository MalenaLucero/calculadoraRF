const Percentage = (capitalizedInterest, percentage, minimum) =>{
    let taxPayingInterest = capitalizedInterest - minimum
    return taxPayingInterest * (percentage * 0.01)
}

export default Percentage

