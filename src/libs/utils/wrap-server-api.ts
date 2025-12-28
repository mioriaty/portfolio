export const wrapServerApi = async <T>(fnc: () => Promise<T>) => {
  let result = null;
  try {
    result = await fnc();
  } catch (error) {
    // In Next.js 16, redirect errors should be re-thrown
    // Check if it's a redirect error by checking for NEXT_REDIRECT symbol
    if (error && typeof error === 'object' && 'digest' in error) {
      const digest = (error as { digest?: string }).digest;
      if (digest?.startsWith('NEXT_REDIRECT')) {
        throw error;
      }
    }
  }
  return result;
};
