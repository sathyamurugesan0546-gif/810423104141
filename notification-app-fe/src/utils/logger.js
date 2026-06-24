const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYXRoeWFtdXJ1Z2VzYW4wNTQ2QGdtYWlsLmNvbSIsImV4cCI6MTc4MjI4ODU0MiwiaWF0IjoxNzgyMjg3NjQyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOWZkMWZhNjMtZmNiMC00NjM2LWFiMGQtZGQ0NGFiZGFkOTg0IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2F0aHlhIG0iLCJzdWIiOiI3MzZlMzYzMC03ZGZjLTQ2NjYtYmU1ZC02NGZjMTdlZWM1NTYifSwiZW1haWwiOiJzYXRoeWFtdXJ1Z2VzYW4wNTQ2QGdtYWlsLmNvbSIsIm5hbWUiOiJzYXRoeWEgbSIsInJvbGxObyI6IjgxMDQyMzEwNDE0MSIsImFjY2Vzc0NvZGUiOiJRV0p1RmYiLCJjbGllbnRJRCI6IjczNmUzNjMwLTdkZmMtNDY2Ni1iZTVkLTY0ZmMxN2VlYzU1NiIsImNsaWVudFNlY3JldCI6IkhTYXpaYmpTUnRBd0FkSkQifQ.7k_RZo6O45E7kMowozoH4dlwOJH4teTE_Jfsot4ovL4";

export async function Log(stack, level, pkg, message) {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          stack,
          level,
          package: pkg,
          message,
        }),
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}