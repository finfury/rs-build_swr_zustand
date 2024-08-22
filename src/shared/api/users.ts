import type { AxiosResponse } from 'axios';

import type { User } from '@/entities/user.ts';
import { $host } from '@/shared/api/api.ts';

export async function fetchGetUsers(): Promise<AxiosResponse<User[]>> {
  return await $host.get('users');
}

export async function fetchGetUser(id: number): Promise<AxiosResponse<User> | undefined> {
  const data = await $host.get(`users/${id}`);
  if (data.status !== 200) return;
  return data;
}
