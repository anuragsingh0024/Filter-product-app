const searchInput = document.getElementById('search')
const searchBtn = document.querySelector('button')
const products = document.querySelectorAll('.product')
const categoryFilter = document.getElementById('category')

searchInput.addEventListener('input', filterProducts)
categoryFilter.addEventListener('change', filterProducts)
searchBtn.addEventListener('click', filterProducts)

function filterProducts(){
        const searchValue = searchInput.value.toLowerCase();
        const categoryValue = categoryFilter.value.toLowerCase();

        products.forEach(product => {
          const name = product.querySelector('h3').textContent.toLowerCase()
          const category = product.dataset.category;

          const matchSearch = name.includes(searchValue)
          const matchCategory = categoryValue === 'all' || category === categoryValue;

          if(matchCategory && matchSearch){
                 product.classList.remove('hidden')
          }
          else{
            product.classList.add('hidden')
          }
        })
}