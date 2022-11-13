import { useQuery } from '@sveltestack/svelte-query';
import * as jokeRepository from '../repository/jokes_repository';

export const getJoke = () => useQuery(['jokes'], jokeRepository.getJoke);