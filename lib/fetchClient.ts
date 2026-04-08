const handleResponse = async (res: Response) => {
  if (!res.ok) {
    let errorData;
    try {
      errorData = await res.json();
    } catch (e) {
      errorData = { message: res.statusText };
    }
    const error: any = new Error(res.statusText || `HTTP status ${res.status}`);
    error.response = { data: errorData, status: res.status };
    throw error;
  }
  
  // Some APIs might return empty responses for DELETE/PUT
  const text = await res.text();
  const data = text ? JSON.parse(text) : {};
  return { data };
};

const fetchClient = {
  get: async (url: string, config?: any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ""}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...config?.headers,
      },
    });
    return handleResponse(res);
  },
  post: async (url: string, body?: any, config?: any) => {
    const isFormData = body instanceof FormData;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ""}${url}`, {
      method: "POST",
      headers: isFormData
        ? config?.headers
        : {
            "Content-Type": "application/json",
            ...config?.headers,
          },
      body: isFormData ? body : JSON.stringify(body),
    });
    return handleResponse(res);
  },
  put: async (url: string, body?: any, config?: any) => {
    const isFormData = body instanceof FormData;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ""}${url}`, {
      method: "PUT",
      headers: isFormData
        ? config?.headers
        : {
            "Content-Type": "application/json",
            ...config?.headers,
          },
      body: isFormData ? body : JSON.stringify(body),
    });
    return handleResponse(res);
  },
  delete: async (url: string, config?: any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ""}${url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...config?.headers,
      },
      body: config?.data ? JSON.stringify(config.data) : undefined,
    });
    return handleResponse(res);
  },
};

export default fetchClient;
