// DOM Elements
const loginPage = document.getElementById('loginPage');
const adminDashboard = document.getElementById('adminDashboard');
const studentDashboard = document.getElementById('studentDashboard');
const studentLoginForm = document.getElementById('studentLoginForm');
const adminLoginForm = document.getElementById('adminLoginForm');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Mock Data
const mockStudents = [
    { id: 'ST001', mobile: '1234567890', name: 'John Doe' },
    { id: 'ST002', mobile: '0987654321', name: 'Jane Smith' }
];

const mockAdmins = [
    { email: 'admin@school.com', password: 'admin123' }
];

const mockPayments = [
    { date: '2024-03-15', amount: 2000, status: 'Paid' },
    { date: '2024-02-15', amount: 1500, status: 'Paid' },
    { date: '2024-01-15', amount: 2000, status: 'Paid' }
];

// Tab Switching Logic
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // Hide all tab contents
        tabContents.forEach(content => content.classList.add('hidden'));
        // Show selected tab content
        const tabId = button.getAttribute('data-tab') + 'Tab';
        document.getElementById(tabId).classList.remove('hidden');
    });
});

// Login Handlers
studentLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const studentId = e.target[0].value;
    const mobile = e.target[1].value;
    
    const student = mockStudents.find(s => s.id === studentId && s.mobile === mobile);
    
    if (student) {
        loginPage.classList.add('hidden');
        studentDashboard.classList.remove('hidden');
        loadStudentDashboard(student);
    } else {
        alert('Invalid credentials');
    }
});

adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    const admin = mockAdmins.find(a => a.email === email && a.password === password);
    
    if (admin) {
        loginPage.classList.add('hidden');
        adminDashboard.classList.remove('hidden');
        loadAdminDashboard();
    } else {
        alert('Invalid credentials');
    }
});

// Logout Handlers
document.getElementById('studentLogout').addEventListener('click', () => {
    studentDashboard.classList.add('hidden');
    loginPage.classList.remove('hidden');
    studentLoginForm.reset();
});

document.getElementById('adminLogout').addEventListener('click', () => {
    adminDashboard.classList.add('hidden');
    loginPage.classList.remove('hidden');
    adminLoginForm.reset();
});

// Dashboard Loading Functions
function loadStudentDashboard(student) {
    const paymentHistoryTable = document.getElementById('paymentHistoryTable');
    paymentHistoryTable.innerHTML = '';
    
    mockPayments.forEach(payment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${payment.date}</td>
            <td>$${payment.amount}</td>
            <td class="text-green-500">${payment.status}</td>
        `;
        paymentHistoryTable.appendChild(row);
    });
}

function loadAdminDashboard() {
    const recentPaymentsTable = document.getElementById('recentPaymentsTable');
    recentPaymentsTable.innerHTML = '';
    
    mockPayments.forEach(payment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${mockStudents[0].name}</td>
            <td>$${payment.amount}</td>
            <td>${payment.date}</td>
        `;
        recentPaymentsTable.appendChild(row);
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Show login page by default
    loginPage.classList.remove('hidden');
    adminDashboard.classList.add('hidden');
    studentDashboard.classList.add('hidden');
});