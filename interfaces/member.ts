interface Member{
  id: string,
  name: string,
  email: string,
  phone: string,
  membership: string,
  avatar: string,
  membershipTime: string,
  status: string,
  
  lastname?: string,
  dateOfBirth?: Date,
  address?: string,
  genre?: string,
  id_card?: string,
  membershipId?: number,
  membership_start_date?: Date,
  membership_expiration_date?: Date,
}

interface MemberToSend extends Member{
  lastname: string,
  dateOfBirth: Date,
  address: string,
  genre: string,
  id_card: string,
  membershipId: number,
}