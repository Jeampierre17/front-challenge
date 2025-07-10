import React, { useState } from 'react'
import { Task } from '../types'
import KanbanColumn from '../components/KanbanColumn'
import TaskForm from '../components/TaskForm'

const Kanban: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Diseñar mockups',
      description: 'Crear mockups para la nueva funcionalidad',
      status: 'todo',
      priority: 'high',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      title: 'Implementar API',
      description: 'Desarrollar endpoints para el backend',
      status: 'in-progress',
      priority: 'medium',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3',
      title: 'Testing',
      description: 'Realizar pruebas unitarias',
      status: 'done',
      priority: 'low',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])

  const [showForm, setShowForm] = useState(false)

  const addTask = (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    setTasks(prev => [...prev, newTask])
    setShowForm(false)
  }

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, ...updates, updatedAt: new Date() }
        : task
    ))
  }

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const moveTask = (taskId: string, newStatus: Task['status']) => {
    updateTask(taskId, { status: newStatus })
  }

  const todoTasks = tasks.filter(task => task.status === 'todo')
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress')
  const doneTasks = tasks.filter(task => task.status === 'done')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-text-primary">Dashboard Kanban</h1>
        <button
          onClick={() => setShowForm(true)}
          className="btn btn-primary"
        >
          + Nueva Tarea
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KanbanColumn
          title="Por Hacer"
          tasks={todoTasks}
          status="todo"
          onMoveTask={moveTask}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
        />
        <KanbanColumn
          title="En Progreso"
          tasks={inProgressTasks}
          status="in-progress"
          onMoveTask={moveTask}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
        />
        <KanbanColumn
          title="Completado"
          tasks={doneTasks}
          status="done"
          onMoveTask={moveTask}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>

      {showForm && (
        <TaskForm
          onSubmit={addTask}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  )
}

export default Kanban 