<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Genuine site!</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:Button ID="VoteUpButton" runat="server" Text="Vote Up" 
            onclick="VoteUpButton_Click" />
        
        <label>Votes: </label><asp:Label ID="votesLabel" runat="server" Text="0"></asp:Label>
    </div>
    </form>
    <%--<script src="BestForNow.js" type="text/javascript"></script>--%>
</body>
</html>
