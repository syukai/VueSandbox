const getEmployeesMock = jest.fn();

jest.mock('@/module/api/EmployeesApi', () => {
    return {
        getEmployees: getEmployeesMock
    };
})