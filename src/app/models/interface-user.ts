export enum Role {STAFF, MANAGER, ADMIN};
export enum Gender {MALE, FEMALE, OTHER};

export interface Userlist {

    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: {
        city: string;
        street: string;
        postalCode: string;
    };
    role: Role;
    username: string;
    profilePhotoUrl: string;
    gender: Gender;

}[];