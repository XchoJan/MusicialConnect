export interface UserType {
    firstName: string;
    lastName: string;
    stageName: string;
    location: string;
    dob: string;
    bio: string;
    mainInstrument: string;
    instruments: string[];
    shouldUpdateAvatar: boolean;
    avatarUrl: string;
    codeValidUntil: string | null;
    confirmationCode: string | null;
    createdAt: string;
    email: string;
    isActive: boolean;
    updatedAt: string;
    __v: number;
    _id: string;
}
