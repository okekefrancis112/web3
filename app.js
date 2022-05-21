const name  = document.getElementById("name")
const tierOne  = document.getElementById("tier-1")
const tierTwo  = document.getElementById("tier-2")
const tierThree  = document.getElementById("tier-3")
const tdName  = document.getElementById("td-name")
const tdTier  = document.getElementById("tier")
const tdInterest  = document.getElementById("interest")
const tdAmount  = document.getElementById("amount")
const tdTotalAmount  = document.getElementById("total-amount")
const saveBtn  = document.getElementById("submit")



saveBtn.addEventListener("click", e => {
    e.preventDefault()
    if(tierOne.value === 'on'){
        tdTier.textContent = 10000
        return 
    }
    if(tierTwo.value === 'on'){
        tdTier.textContent = 20000
        return
    }
    if(tierThree.value === 'on'){
        tdTier.textContent = 30000
        return
    }
    
})