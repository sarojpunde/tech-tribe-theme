export const handleGraphQLError = (error, context) => {
  console.error(`Error ${context}:`, error);
  throw error;
};
