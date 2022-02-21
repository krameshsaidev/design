$(document).ready(function () {
    var html = '<h5>Home</h5><a href="#" class="list-group-item list-group-item-action py-2 ripple" style="border:0;"> <span>Home 1</span> </a><a href="#" class="list-group-item list-group-item-action py-2 ripple" style="border:0;"> <span>Home 2</span> </a><a href="#" class="list-group-item list-group-item-action py-2 ripple" style="border:0;"> <span>Home 3</span> </a>';
    $('#menulist').empty().html(html);
});

$('#navbarSupportedContent .nav-link').on('click', function () {
    $(this).parent('li').parent('ul').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
    var menuitem = $(this).text();
    var menuheaders, menuitems = [];
    if (menuitem.toLowerCase() == 'home') {
        var menuheaders = ['Home'];
        var menuitems = {
            Home: ['Home 1', 'Home 2', 'Home 3']
        };
    }
    else if (menuitem.toLowerCase() == 'patient access') {
        var menuheaders = ['Submit', 'Track'];
        var menuitems = {
            Submit: ['Real-Time Eligibility Inquiry', 'Real-Time Referral/Auth/Inquiry', 'Upload CSV File'],
            Track: ['Find Previous Eligibility Response', 'Find Previous Referral/Auth/Inquiry', 'Upload CSV Elig Batch', 'Find Patient Eligibility']
        };
    }
    else if (menuitem.toLowerCase() == 'claims and tracking') {
        var menuheaders = ['Submit_Claims', 'Track_Claims', 'Manage_Claim_Status_Inquiry'];
        var menuitems = {
            Submit_Claims: ['Upload File', 'Create New Claim', 'Create Secondary Claim', 'Copy From Existing Claim', 'Review Claim Workspace', 'Manage Patient List', 'Copy Rejection For Resub'],
            Track_Claims: ['Find Claims', 'Find Claim Batches', 'Find Claims & Check Eligibility', 'Find Claims & Check Claim Status', 'Find Claims Needing Attachments'],
            Manage_Claim_Status_Inquiry: ['Real-Time Claim Status Inquiry', 'Find Previous CSI Response', 'Upload CSI CSV File', 'Find CSV CSI File']
        };
    }
    else if (menuitem.toLowerCase() == 'rejections and denials') {
        var menuheaders = ['Manage_Rejected_Claims', 'Track_Denied_Remits_/ Eobs'];
        var menuitems = {
            Manage_Rejected_Claims: ['Find All Rejected Claims', 'Find CH Rejected Claims', 'Find Payer Rejected Claims'],
            'Track_Denied_Remits_/ Eobs': ['Find Payer Reported Denials', 'Find Zero Paid,No Patient Responsibility']
        };
    }
    else if (menuitem.toLowerCase() == 'payments and billing') {
        var menuheaders = ['Manage_Remits_/ Eobs', 'Manage_Patient_Billing'];
        var menuitems = {
            'Manage_Remits_/ Eobs': ['Find Remittance/EOB/Check', 'Find Remit File/Batch of Remits', 'Find Claims With Payments', 'Find Claims Without Payments'],
            Manage_Patient_Billing: ['Find ZeroPaid,With Patient Responsibility', 'Take Patients Payment', 'Find Payments Taken', 'Go To TransFirtst Tx Central', 'Manage Patient Statements', 'Go to PaymentManager']
        };
    }
    else if (menuitem.toLowerCase() == 'reporting and metrics') {
        var menuheaders = ['Key_Performance_Reports', 'MailBox'];
        var menuitems = {
            Key_Performance_Reports: ['Performance Dashboard', 'Benchmarking', 'Processed Claims Report', 'Processed Remittance Report', 'Processed Paper Claims Report'],
            MailBox: ['Manage Claim Submission Reports', 'Manage Archieved Claim Submission Reports', 'Manage Remittance Files', 'Manage Scheduled Portal Reports']
        };
    }
    else if (menuitem.toLowerCase() == 'tools and setup') {
        var menuheaders = ['My_User_Settings', 'Portal_Administration', 'Enrollment', '5010_/ ICD10_Tester'];
        var menuitems = {
            My_User_Settings: ['My Default Profile', 'My Default Service', 'My User Information', 'My Password Reset Q and A'],
            Portal_Administration: ['Manage Profiles', 'Manage Users', 'Review User Audit Logs', 'User Activity Summary', 'Auto Real-Time Configuration', 'Denial Prevention Configuration'],
            Enrollment: ['Manage Enrollment Contacts', 'Manage User Settings', 'Manage Enrollment Profiles', 'Payer Lists', 'Providers', 'Print Queue', 'Existing Enrollments', 'Bulk Upload'],
            '5010_/ ICD10_Tester': ['Overview', 'Upload Claim Test File', 'View Claim Test Results', 'Test Remittance Mailbox']
        };
    }

    var html = '';
    for (var i = 0; i < menuheaders.length; i++) {
        var header = menuheaders[i];
        html = html + '<h5>' + header.replaceAll('_', ' ') + '</h5>';
        for (var j = 0; j < menuitems[menuheaders[i]].length; j++) {
            html = html + '<a href="' + menuitems[menuheaders[i]][j].replaceAll(' ', '').replaceAll('-', '').replaceAll('&', '').replaceAll('/','') + '.html" class="list-group-item list-group-item-action py-2 ripple" style="border:0;"> <span>' + menuitems[menuheaders[i]][j] + '</span> </a><div>';
        }
    }
    $('#menulist').empty().html(html);
});