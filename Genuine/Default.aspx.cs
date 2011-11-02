using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    int votes;
    protected void Page_Load(object sender, EventArgs e)
    {
        //Response.AddHeader("X-Frame-Options", "DENY");
        if (Session["storedVotes"] != null)
        {
            votes = (Convert.ToInt32(Session["storedVotes"]));
        }
        else { 
            votes = 0; 
        }
        votesLabel.Text = votes.ToString();
    }


    protected void VoteUpButton_Click(object sender, EventArgs e)
    {
        votes++;
        votesLabel.Text = votes.ToString();
        Session["storedVotes"] = votes;
    }
}