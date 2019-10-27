const InterestPercentage = (totalAmount, interestRate, period) =>{
    return totalAmount*(interestRate * 0.01)/365*period
}

export default InterestPercentage