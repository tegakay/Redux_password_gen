export async function generate() {
  const response = await fetch("https://password.ninja/api/password");
  const password = await response.json();
  return password;
}
