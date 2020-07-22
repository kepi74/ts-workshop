/**
 * Požadavky
 * - uživatel musí zadat user name
 * - uživatel musí zadat min. jeden z kontaktních údajů: email/phone
 */

export interface ContactState {
  userName: string
  email?: string
  phone?: string
}
