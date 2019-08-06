from django.db import models
    # Create your models here.

# add this
class Rabbithole(models.Model):
	category = models.CharField(max_length=250, default="null")
	sub_category = models.CharField(max_length=250, default="null")
	channel_name = models.CharField(max_length=250, default="null")
	uploads = models.CharField(max_length=250, default="null")	
	subscribers = models.CharField(max_length=250, default="null")
	view_count = models.CharField(max_length=250, default="null")
	thumbnail = models.CharField(max_length=250, default="null")
	customUrl = models.CharField(max_length=250, default="null")

def _str_(self):
    return self.title