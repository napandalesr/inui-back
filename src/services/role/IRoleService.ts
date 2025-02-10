export interface IRoleService {
  findAll(): Promise<{ id: number; name: string }[]>;
}
