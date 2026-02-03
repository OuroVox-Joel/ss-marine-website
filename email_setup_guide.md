# Professional Email Setup Guide for S&S Marine

To set up professional email addresses (e.g., `torben@ssmarine.com` or `rui@ssmarine.com`), you will need to choose an email hosting provider and configure your domain's DNS settings.

## Recommended Providers

### 1. Google Workspace (Recommended)
- **Pros:** Familiar Gmail interface, excellent spam filtering, includes Google Drive, Docs, and Meet.
- **Cost:** Starts at ~/user/month.
- **Setup:** Very user-friendly with a step-by-step wizard.

### 2. Microsoft 365
- **Pros:** Includes desktop versions of Word, Excel, and PowerPoint. Best for deep integration with Windows.
- **Cost:** Starts at ~/user/month.
- **Setup:** Comprehensive but slightly more complex than Google.

### 3. Zoho Mail
- **Pros:** Very affordable, has a free tier for small teams (up to 5 users).
- **Cost:** Free tier available; paid plans start at ~/user/month.
- **Setup:** Straightforward.

## General Setup Steps

1.  **Sign Up:** Choose a provider and sign up using your domain (`ssmarine.com` or `ssmarineconsulting.com`).
2.  **Verify Ownership:** The provider will ask you to add a specific TXT record to your domain's DNS settings to prove you own it.
3.  **Configure MX Records:** You will need to update the "MX Records" in your domain's DNS settings. These records tell the internet where to deliver your email.
4.  **Add SPF/DKIM/DMARC:** These are security records that prevent your emails from being marked as spam. Your provider will give you the specific values to add.

## How I Can Help
Since you mentioned being "blank on the IT side," I can guide you through the DNS configuration once you've chosen a provider. You will need to provide me with the login details for your domain registrar (where you bought the domains) or I can give you the exact records to copy and paste.

**Recommendation:** I suggest starting with **Google Workspace** for its ease of use and reliability.
