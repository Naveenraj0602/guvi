let currentPage = 1;
const itemsPerPage = 5; // Adjust as needed
let totalPages = 1;
let totalItems = 0;

function generateContent(pageNumber, data) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = data.slice(startIndex, endIndex);

  const contentTable = document.getElementById('table');
  contentTable.innerHTML = '';

  // Create the table header
  const thead = contentTable.createTHead();
  const headerRow = thead.insertRow();
  const idHeader = document.createElement('th');
  idHeader.textContent = 'S.No';
  headerRow.appendChild(idHeader);

  const titleHeader = document.createElement('th');
  titleHeader.textContent = 'Name';
  headerRow.appendChild(titleHeader);

  const descriptionHeader = document.createElement('th');
  descriptionHeader.textContent = 'E-Mail';
  headerRow.appendChild(descriptionHeader);

  // Create the table body
  const tbody = contentTable.createTBody();

  pageData.forEach(item => {
    const row = tbody.insertRow();

    const idCell = row.insertCell(0);
    idCell.textContent = item.id;

    const titleCell = row.insertCell(1);
    titleCell.textContent = item.name;

    const descriptionCell = row.insertCell(2);
    descriptionCell.textContent = item.email;
  });

  // Update page info
  document.getElementById('currentPage').textContent = pageNumber;
  document.getElementById('totalPages').textContent = totalPages;
  document.getElementById('totalItems').textContent = totalItems;
  document.getElementById('currentId').textContent = startIndex + 1;
}

function showPage(pageNumber, data) {
  generateContent(pageNumber, data);

  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
    if (page.dataset.page == pageNumber) {
      page.classList.add('active');
    }
  });
}

function changePage(offset) {
  fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
    .then(response => response.json())
    .then(data => {
      totalPages = Math.ceil(data.length / itemsPerPage);
      totalItems = data.length;

      const newPage = currentPage + offset;
      if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        showPage(currentPage, data);
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}


changePage(0); 
