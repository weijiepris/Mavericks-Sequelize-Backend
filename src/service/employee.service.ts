import Employee, { EmployeeModel, } from "../models/employee.model";

export const getEmployees = async (): Promise<Employee[]> => await Employee.findAll();

export const createEmployee = async (employee: any): Promise<Employee> => Employee.create(employee);

export const getEmployeeById = async (id: number): Promise<Employee | null> => Employee.findByPk(id)

export const updateEmployeeById = async (id: number, employeeModel: EmployeeModel): Promise<Employee> => {
    const [updatedRowCount, updatedEmployee]: [any, Employee[]] = await Employee.update(employeeModel, {
        where: { id },
        returning: true, // This returns the updated employee record
    });
    return updatedEmployee[0];
}

export const deleteEmployeeById = async (id: number): Promise<void> => {
    Employee.destroy({ where: { id } });
}