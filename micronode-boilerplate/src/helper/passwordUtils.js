import bcrypt from 'bcryptjs'

export const hashPassword = password => bcrypt.hashSync(password,bcrypt.genSaltSync(12));

export const passwordCompare = (passwordToTest, passwordHash) => bcrypt.compareSync(passwordToTest,passwordHash);
