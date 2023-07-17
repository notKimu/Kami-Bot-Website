export interface commandDto {
    name: string;
    options: string[] | null;
    description: string;
    defaultPerm: "Everyone" | "Manage Messages" | "Kick Members" | "Administrator";
}