import { Box, Typography, Card, CardContent } from "@mui/material";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const ProductLanding = () => {

  return (
    <Box sx={{ overflowX: "hidden", width: "100%" }}>
      {/* Header - Product name */}
      <Box
        component="header"
        sx={{
          background: "linear-gradient(to bottom, #173039, #00b4c9)",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            padding: { xs: "24px 16px", md: "50px 80px" },
            maxWidth: "1400px",
            width: "100%",
            margin: "auto",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "45px" },
              lineHeight: { xs: "36px", md: "60px" },
              color: "#fff",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            eSTOKK Real Estate
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              color: "rgba(255,255,255,0.8)",
              fontWeight: 400,
            }}
          >
            Tokenized Property Investment for Everyone
          </Typography>
        </Box>
      </Box>
      {/* Hero - Img + Description */}
      <Box
        component="section"
        sx={{
          padding: { xs: "24px 16px", md: "60px 80px" },
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "24px", md: "40px" },
            alignItems: "center",
          }}
        >
          {/* Product image */}
          <Box
            component="img"
            src="https://placehold.co/500x400"
            alt="Product image"
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", md: "500px" },
              borderRadius: "12px",
            }}
          />

          {/* Description */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                lineHeight: 1.6,
                color: "#555",
              }}
            >
              eSTOKK is the first tokenized real estate marketplace that allows anyone to invest in premium properties worldwide. No minimum investment barriers, no complex paperwork — just connect your wallet and start building your portfolio in minutes.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Features - List of characteristics */}
      <Box
        component="section"
        sx={{
          padding: { xs: "24px 16px", md: "60px 80px" },
          maxWidth: "1400px",
          margin: "auto"
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: 600,
            color: "#173039",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          Features
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {/* Card 1 */}
          <Card
            sx={{
              flex: 1,
              maxWidth: { md: "350px" },
              textAlign: "center",
              padding: "16px",
            }}
          >
            <CardContent>
              <HomeWorkIcon sx={{ fontSize: 48, color: "#00dbe3", mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#173039", mb: 1 }}>
                Tokenized Properties
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Invest in real estate through blockchain-powered tokens. Start with as little as $50.
              </Typography>
            </CardContent>
          </Card>
          {/* Card 2 */}
          <Card
            sx={{
              flex: 1,
              maxWidth: { md: "350px" },
              textAlign: "center",
              padding: "16px",
            }}
          >
            <CardContent>
              <SecurityIcon sx={{ fontSize: 48, color: "#00dbe3", mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#173039", mb: 1 }}>
                Secure Transactions
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                All transactions are secured on Ethereum with smart contracts and full transparency.
              </Typography>
            </CardContent>
          </Card>
          {/* Card 3 */}
          <Card
            sx={{
              flex: 1,
              maxWidth: { md: "350px" },
              textAlign: "center",
              padding: "16px",
            }}
          >
            <CardContent>
              <AccountBalanceWalletIcon sx={{ fontSize: 48, color: "#00dbe3", mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#173039", mb: 1 }}>
                Passive Income
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Earn rental yields automatically distributed to your wallet every month.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      {/* Footer - Contact info */}
      <Box
        component="footer"
        sx={{
          background: "#173039",
          marginTop: "40px",
          padding: { xs: "24px 16px", md: "40px 80px" },
        }}
      >
        <Box
          sx={{
            maxWidth: "1400px",
            margin: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: "24px", md: "16px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src="/images/logo_bt.png"
            alt="Company logo"
            sx={{
              height: { xs: "40px", md: "50px" },
              width: "auto",
            }}
          />

          {/* Contact info */}
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "18px",
                marginBottom: "8px",
              }}
            >
              Contact Us
            </Typography>
            <Typography sx={{ color: "#aaa", fontSize: "14px" }}>
              contact@estokk.com
            </Typography>
            <Typography sx={{ color: "#aaa", fontSize: "14px" }}>
              +1 (555) 123-4567
            </Typography>
          </Box>

          {/* Copyright */}
          <Typography sx={{ color: "#666", fontSize: "14px" }}>
            © 2026 eSTOCKKYAM Inc. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};