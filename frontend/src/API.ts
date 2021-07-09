import axios, { AxiosResponse } from 'axios'

const getTodos = async (): Promise<AxiosResponse<Array<ITodo>>> => {
    // TODO: Should call GET 
    try{
        const todos = await axios.get('/api/todos')
        return todos
    } catch(e){
        console.error(`GET /api/todos ERROR: ${e}`)
        throw new Error(e)
    }
}

// TODO: Should call POST endpoint
const addTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {
    try{
        const newTodo = {
            ...todoBody,
            status: false
        }
        const todo = await axios.post('/api/todos', newTodo)
        return todo
    } catch(e){
        console.error(`POST /api/todos ERROR: ${e}`)
        throw new Error(e)
    }
}

const updateTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {
    // TODO: Should call PUT endpoint
    try{
        const newTodo = {
            ...todoBody,
            status: true
        }
        const todo = await axios.put(`/api/todos/${todoBody._id}`, newTodo)
        return todo
    } catch(e){
        console.error(`PUT /api/todos/${todoBody._id} ERROR: ${e}`)
        throw new Error(e)
    }
}

const deleteTodo = async (id: string): Promise<AxiosResponse> => {
    // TODO: Should call DELETE endpoint
    try{
        const todo = await axios.delete(`/api/todos/${id}`)
        return todo
    } catch(e){
        console.error(`DELETE /api/todos/${id} ERROR: ${e}`)
        throw new Error(e)
    }
}

export { getTodos, addTodo, updateTodo, deleteTodo }
