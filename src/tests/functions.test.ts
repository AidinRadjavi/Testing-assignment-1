import { beforeEach, afterEach, describe, expect, it } from "vitest";
import { addTodo, deleteTodo, toggleTodo } from '../functions';
import { Todo } from '../types/Todo';

//-------------------------------------------------------------------------------------------------------
// ADD TODO
describe('addTodo', () => {
  let todos: Todo[];

  beforeEach(() => {
    todos = [{ id: 1, title: 'Existing Todo', completed: false }];
  });

  afterEach(() => {
    todos = [];
  });

  // this should test function to add todo
  it('should add a todo', () => {
		const newTitle = 'New Todo';
		const result = addTodo(newTitle, todos);
		expect(result.success).toBe(true);
		expect(todos.length).toBe(2);
		expect(todos[1].title).toBe(newTitle);
  });

  // this should not add a todo if title is empty
  it('should not add a todo with empty title', () => {
		const result = addTodo('', todos);
		expect(result.success).toBe(false);
		expect(todos.length).toBe(1);
		expect(todos[0].title).toBe('Existing Todo');
  });

  // this should test to see so that there is enough characters before adding a todo
  it('should not add a todo with title shorter than 3 characters', () => {
		const shortTitle = 'A';
		const result = addTodo(shortTitle, todos);
		expect(result.success).toBe(false);
		expect(todos.length).toBe(1);
		expect(todos[0].title).toBe('Existing Todo');
  });

});

//-------------------------------------------------------------------------------------------------------
// TOGGLE TODO

describe('toggleTodo', () => {
	let todos: Todo[];

	beforeEach(() => {
	  todos = [{ id: 1, title: 'Existing Todo', completed: false }];
	});

	// this should test to see if you can toggle a todo
	it('should toggle a todo', () => {
	  	const todoId = 1;
	  	const result = toggleTodo(todoId, todos);
	  	expect(result.success).toBe(true);
	  	expect(todos[0].completed).toBe(true);
	});

	// this should test to see so that a toggle should not be possible if todo does not exist
	it('should not toggle a todo that does not exist', () => {
		const nonExistentId = 2;
		const result = toggleTodo(nonExistentId, todos);
		expect(result.success).toBe(false);
		expect(todos[0].completed).toBe(false);
	});

});

//-------------------------------------------------------------------------------------------------------
// DELETE TODO

describe('deleteTodo', () => {
	let todos: Todo[];

	beforeEach(() => {
	  todos = [{ id: 1, title: 'Existing Todo', completed: false }];
	});

	// this should test to delete a todo
	it('should delete a todo', () => {
		const todoId = 1;
		const result = deleteTodo(todoId, todos);
		expect(result.success).toBe(true);
		expect(todos.length).toBe(0);
	});

	// this should test to delete todo that does not exist
	it('should not delete a todo that does not exist', () => {
		const nonExistentId = 2;
    	const result = deleteTodo(nonExistentId, todos);
    	expect(result.success).toBe(false);
    	expect(todos.length).toBe(1);
	});

  });

