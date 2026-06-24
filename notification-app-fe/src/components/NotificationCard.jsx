import { Card, CardContent, Typography } from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography variant="body1">
          {notification.Message}
        </Typography>

        <Typography variant="caption">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}