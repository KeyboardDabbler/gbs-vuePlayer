import { reactive, readonly } from 'vue';

const loading = reactive<boolean[]>([]);

const fns = {
  start(): void {
    loading.push(true);
  },
  finish(): void {
    loading.shift();
  },
  running: readonly(loading)
};

/**
 * Loading process
 */
export function useLoading(): typeof fns {
  return fns;
}
