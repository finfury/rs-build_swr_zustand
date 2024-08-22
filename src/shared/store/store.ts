import {create} from 'zustand'
import {User} from '@/entities/user.ts'
import {fetchGetUser, fetchGetUsers} from '@/shared/api/users.ts'


type UserStore = {
	users: User[],
	getUsers: () => void
	getUser: (id: number) => void
	removeUser: (id: number) => void
}

export const useUserStore = create<UserStore>()((set) => ({
	users: [],
	getUsers: async () => {
		const response = await fetchGetUsers()
		set({users: response.data})
	},
	getUser: async (id) => {
		const response = await fetchGetUser(id)
		if (!response) return
		set((state) => ({users: state.users.push(response.data)}))
	},
	removeUser: async (id) => {
		set((state) => ({
			users: state.users.filter(user => user.id !== id)
		}))
	}
}))
