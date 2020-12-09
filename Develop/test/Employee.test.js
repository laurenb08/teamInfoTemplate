const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof (e)).toBe("object");
});

test("Can set name via constructor arguments", () => {

  //arrange
  const name = "Alice";

  //act
  const e = new Employee(name);

  //assert
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {

  //arrange
  const testValue = 100;

  //act
  const e = new Employee("Foo", testValue);

  //assert
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {

  //arrange
  const testValue = "test@test.com";

  //act
  const e = new Employee("Foo", 1, testValue);

  //assert
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {

  //arrange
  const testValue = "Alice";

  //act
  const e = new Employee(testValue);

  //assert
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {

  //arrange
  const testValue = 100;

  //act
  const e = new Employee("Foo", testValue);

  //assert
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
